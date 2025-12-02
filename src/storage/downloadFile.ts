/**
 * Downloads a file with the specified content
 * @param content - The file content (string or Blob)
 * @param filename - The filename for the download
 * @param mimeType - The MIME type (default: 'text/plain')
 * @example
 * downloadFile('Hello World', 'hello.txt')
 * downloadFile(new Blob(['data']), 'data.bin', 'application/octet-stream')
 */
export function downloadFile(
  content: string | Blob,
  filename: string,
  mimeType: string = 'text/plain'
): void {
  const blob = typeof content === 'string' ? new Blob([content], { type: mimeType }) : content;
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

