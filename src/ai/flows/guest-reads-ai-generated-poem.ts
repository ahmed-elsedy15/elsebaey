'use server';
/**
 * @fileOverview A Genkit flow that generates a romantic poem or welcome message
 * for wedding guests, featuring the names of the couple.
 *
 * - generateWelcomePoem - A function that triggers the AI poem generation.
 * - GenerateWelcomePoemInput - The input type for the generateWelcomePoem function.
 * - GenerateWelcomePoemOutput - The return type for the generateWelcomePoem function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWelcomePoemInputSchema = z.object({
  mohammedName: z.string().default('Mohammed').describe("The groom's name."),
  dinaName: z.string().default('Dina').describe("The bride's name."),
});
export type GenerateWelcomePoemInput = z.infer<typeof GenerateWelcomePoemInputSchema>;

const GenerateWelcomePoemOutputSchema = z.object({
  poem: z
    .string()
    .describe(
      'A romantic poem or welcome message for guests, personalized for the couple.'
    ),
});
export type GenerateWelcomePoemOutput = z.infer<typeof GenerateWelcomePoemOutputSchema>;

export async function generateWelcomePoem(
  input: GenerateWelcomePoemInput
): Promise<GenerateWelcomePoemOutput> {
  return generateWelcomePoemFlow(input);
}

const poemPrompt = ai.definePrompt({
  name: 'weddingWelcomePoemPrompt',
  input: {schema: GenerateWelcomePoemInputSchema},
  output: {schema: GenerateWelcomePoemOutputSchema},
  prompt: `As a professional poet, compose a short, heartfelt, and romantic welcome poem or message for the wedding guests of {{{mohammedName}}} and {{{dinaName}}}.
The poem should evoke feelings of love, joy, and celebration, setting a warm and elegant tone for their special day.
Focus on the couple's love story and the happiness of their union.

Output ONLY the poem/message, nothing else.`,
});

const generateWelcomePoemFlow = ai.defineFlow(
  {
    name: 'generateWelcomePoemFlow',
    inputSchema: GenerateWelcomePoemInputSchema,
    outputSchema: GenerateWelcomePoemOutputSchema,
  },
  async (input) => {
    const {output} = await poemPrompt(input);
    return output!;
  }
);
