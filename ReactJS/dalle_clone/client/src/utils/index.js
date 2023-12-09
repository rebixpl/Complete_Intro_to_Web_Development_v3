import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  // If the random prompt is the same as the prompt passed in,
  // call the function again to get a new prompt
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}