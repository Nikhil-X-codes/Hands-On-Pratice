text = "ABCDEFGHIJ"

def chunk_text(text,chunk_size):
    
    if len(text) <= chunk_size:
        return [text]
    
    chunks = []

    start = 0

    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start = end

    return chunks

print(chunk_text(text, 4))