import asyncio

async def generate_ans(prompt):
    await asyncio.sleep(1)
    return f"answer for {prompt}"

async def mergeresult(prompts):
    tasks = [generate_ans(p) for p in prompts]
    return await asyncio.gather(*tasks)


results = asyncio.run(
    mergeresult(["RAG", "Agents", "Embeddings"])
)

print(results)
