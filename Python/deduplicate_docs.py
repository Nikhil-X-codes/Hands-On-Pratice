def deduplicate_documents(docs):
    res = []
    seen = set()

    for doc in docs:
        text = doc['text']

        if text not in seen:
            seen.add(text)
            res.append(doc)

    return res


docs = [
    {"text": "RAG retrieves context", "score": 0.92},
    {"text": "Embeddings represent meaning", "score": 0.85},
    {"text": "RAG retrieves context", "score": 0.78},
]

print(deduplicate_documents(docs))