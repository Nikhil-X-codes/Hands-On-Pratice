import json

def parse_llm_response(response):
    
#   json.load() -> parses JSON from a file

    try:
      return json.loads(response)
    
    except:
      return None
   


response1 = '{"answer": "RAG", "confidence": 0.92}'

response2 = '{answer: "RAG", "confidence": 0.92}'

response3 = '{"sources": ["React", "RAG"], "confidence": 0.85}'

response4 = '{"count": 10}'

response5 = ""

print(parse_llm_response(response1))
print(parse_llm_response(response2))
print(parse_llm_response(response3))
print(parse_llm_response(response4))
print(parse_llm_response(response5))