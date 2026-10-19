
def merge_results(semantic_results, keyword_results):

    seen = {}

    for doc in semantic_results + keyword_results:

        text = doc['text']

        if text not in seen:
            seen[text] = doc

        else:
            if doc['score'] > seen[text]['score']:
                seen[text] = doc

    return list(seen.values())
 

semantic_results = [
    {"text": "RAG retrieves context", "score": 0.85},
    {"text": "Embeddings represent meaning", "score": 0.90}
]

keyword_results = [
    {"text": "RAG retrieves context", "score": 0.95},
    {"text": "BM25 keyword search", "score": 0.80}
]

print(merge_results(semantic_results, keyword_results))
