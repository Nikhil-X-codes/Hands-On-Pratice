
def get_best_answer(results):
    
    maxi = 0
    best_ans = None

    for res in results:
        if res["confidence"] > maxi:
            maxi = res["confidence"]
            best_ans = res["answer"]

    return best_ans


results = [
    {"answer": "Use RAG", "confidence": 0.78},
    {"answer": "Fine-tune the model", "confidence": 0.65},
    {"answer": "Improve retrieval", "confidence": 0.91}
]

print(get_best_answer(results))
