
from pathlib import Path

def create_chunks(text, source, chunk_size):
    chunks = []

    for i in range(0, len(text), chunk_size):
        chunk_text = text[i:i + chunk_size]

        chunks.append({
            "text": chunk_text,
            "source": source,
            "chunk_id": len(chunks)
        })

    return chunks


notes_dir = Path("./Notes")
all_chunks = []

for file_path in notes_dir.glob("*.txt"):

    with open(file_path, "r", encoding="utf-8") as file:
        text = file.read()

    file_chunks = create_chunks(text, file_path.name, 10)
    all_chunks.extend(file_chunks)

print("Total chunks:", len(all_chunks))

for chunk in all_chunks:
    print(chunk)
