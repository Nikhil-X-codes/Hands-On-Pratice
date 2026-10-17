def process_results(results,score_threshold):
    
    filter_res = []

    for i in results:
        if i["score"] >= score_threshold:
            filter_res.append(i)
    
    return filter_res
    

results = [
    {"text": "React hooks guide", "score": 0.92},
    {"text": "RAG retrieval techniques", "score": 0.85},
    {"text": "React Native basics", "score": 0.75},
    {"text": "Advanced RAG patterns", "score": 0.88}
]

print(process_results(results,0.8))