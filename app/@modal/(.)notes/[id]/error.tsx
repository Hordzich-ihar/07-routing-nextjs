"use client";

type Props = {
  error: Error;
};

export default function NotePreviewError({ error }: Props) {
  return <p>Unable to load note preview. {error.message}</p>;
}
