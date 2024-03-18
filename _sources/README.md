# SELF-LEARNING TUTORIAL

__(AI for Healthcare, Spring 2024)__


## Fine-Tuning and Retrieval-Augmentation: Teaching LLMs new tricks

Instruction-tuned LLM's have achieved superior natural language
processing capabilities with promising applications in healthcare, for
example, as AI medical assistants to interact “knowledgeably” or
“informatively” with patients or clinical staff, hence allowing
scarce, skilled, human labor to be deployed elsewhere.

This tutorial explores the use of open-source LLMs in healthcare NLP,
specifically for PubMed question answering and Medical natural
language inference, and demonstrates how to overcome the following
hurdles:

1. If the model has not been instructed for the required
downstream task, then fine-tuning can enhance its performance.

2. When the model was not pre-trained with current or relevant data
for the task, then retrieval-augmented generation (RAG) can be an
efficient solution.

2. On consumer devices like laptops, techniques such as quantization
and low-rank adaption can be used to load, train and run the models.

We show how to apply these methods on the popular Llama-2 (Meta AI,
July 2023) as well as the recently-released Gemma (Google, February
2024) models – the 2B version of the latter has a footprint small
enough to potentially fit in mobile devices. Such approaches towards
customizing open-source LLM’s are particularly important for the
conversational and textual applications in the healthcare domain,
where privacy, security and mobility are critical concerns.


## Downloads

This tutorial comprises presentation slides, as well as python code, 
all of which can be downloaded from the links below:

- [Tutorial Slides (pdf format)](https://t-lim.github.io/tutorial.pdf) or [(powerpoint format)](https://t-lim.github.io/tutorial.pptx)
- [finetune_nli.ipynb](https://t-lim.github.io/_sources/finetune_nli.ipynb) - Fine-tune for Medical natural language inference (NLI) task
- [rag_pubmedqa.ipynb](https://t-lim.github.io/_sources/rag_pubmedqa.ipynb) - Retrieval-Augmented Generation (RAG) for Medical question-answering (QA) task
- [electra_nli.ipynb](https://t-lim.github.io/_sources/electra_nli.ipynb) - Appendix: Introduction to using Hugging Face transformers module

The notebooks can also be selected and viewed from the menu in the left panel.
