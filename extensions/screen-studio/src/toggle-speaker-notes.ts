import { open } from "@raycast/api";

export default async function Command() {
  await open("screen-studio://toggle-speaker-notes");
  return null;
}
