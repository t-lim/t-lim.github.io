Search.setIndex({"docnames": ["README", "electra_nli", "finetune_nli", "rag_pubmedqa"], "filenames": ["README.md", "electra_nli.ipynb", "finetune_nli.ipynb", "rag_pubmedqa.ipynb"], "titles": ["SELF-LEARNING TUTORIAL", "Fine-tune Electra encoder transformer model for Medical NLI task", "Fine-tune LLM for Medical NLI task", "Retrieval-Augmented Generation for Medical Question-Answering"], "terms": {"fine": 0, "tune": 0, "retriev": [0, 1], "augment": 0, "teach": 0, "llm": [0, 3], "new": [0, 2, 3], "trick": 0, "instruct": [0, 3], "": [0, 1, 2, 3], "have": [0, 1, 2, 3], "achiev": 0, "superior": 0, "natur": [0, 2], "languag": [0, 2], "process": [0, 1], "capabl": 0, "promis": 0, "applic": [0, 2], "healthcar": [0, 2], "exampl": [0, 1, 2], "ai": [0, 3], "medic": 0, "assist": [0, 3], "interact": 0, "knowledg": [0, 3], "inform": 0, "patient": [0, 2], "clinic": [0, 2], "staff": 0, "henc": 0, "allow": [0, 2], "scarc": 0, "skill": 0, "human": 0, "labor": 0, "deploi": 0, "elsewher": 0, "thi": [0, 1, 2, 3], "explor": 0, "us": [0, 1, 2, 3], "open": [0, 1, 2, 3], "sourc": [0, 2, 3], "nlp": [0, 2, 3], "specif": [0, 3], "pubm": [0, 3], "question": 0, "answer": [0, 2], "infer": [0, 1, 2], "demonstr": [0, 2, 3], "how": [0, 1, 2, 3], "overcom": 0, "follow": [0, 1, 2, 3], "hurdl": 0, "If": [0, 1], "model": 0, "ha": [0, 2, 3], "been": [0, 2, 3], "requir": [0, 2, 3], "downstream": [0, 2], "task": [0, 3], "can": [0, 1, 2], "enhanc": 0, "its": [0, 3], "perform": [0, 1, 2], "when": 0, "wa": [0, 2, 3], "pre": [0, 1], "train": 0, "current": 0, "relev": [0, 1], "data": [0, 2], "gener": [0, 1], "rag": [0, 3], "an": [0, 1, 2], "effici": [0, 2], "solut": 0, "On": 0, "consum": [0, 2], "devic": [0, 2], "like": [0, 2], "laptop": [0, 2], "techniqu": [0, 2], "quantiz": [0, 3], "low": [0, 2, 3], "rank": [0, 2], "adapt": [0, 2], "load": 0, "run": [0, 1, 2], "we": 0, "show": [0, 2, 3], "appli": [0, 2, 3], "method": [0, 1, 2, 3], "popular": 0, "llama": [0, 2, 3], "2": [0, 1, 2, 3], "juli": 0, "2023": [0, 2, 3], "well": [0, 3], "recent": 0, "releas": 0, "gemma": [0, 2, 3], "februari": 0, "2024": [0, 2, 3], "2b": [0, 2], "version": [0, 2, 3], "latter": 0, "footprint": 0, "small": [0, 2], "enough": 0, "potenti": [0, 3], "fit": 0, "mobil": 0, "Such": 0, "approach": 0, "toward": 0, "custom": [0, 1], "ar": [0, 1, 2, 3], "particularli": 0, "import": [0, 1, 2, 3], "convers": 0, "textual": 0, "domain": [0, 2], "where": [0, 1, 2], "privaci": 0, "secur": 0, "critic": 0, "concern": 0, "slide": 0, "electra_nli": 0, "ipynb": 0, "finetune_nli": 0, "rag_pubmedqa": 0, "The": [0, 1, 2, 3], "notebook": [0, 2], "also": [0, 1, 2, 3], "select": [0, 1, 2, 3], "from": [0, 1, 3], "left": [0, 3], "panel": 0, "view": [0, 3], "refer": [1, 2, 3], "http": [1, 2, 3], "huggingfac": [1, 2, 3], "co": [1, 2, 3], "doc": [1, 2, 3], "en": [1, 2, 3], "gregdurrett": 1, "fp": 1, "artifact": 1, "o": [1, 2], "json": [1, 2, 3], "datetim": [1, 2], "numpi": [1, 2, 3], "np": [1, 2, 3], "torch": [1, 2, 3], "sklearn": [1, 2, 3], "metric": [1, 2, 3], "classification_report": [1, 2, 3], "confusion_matrix": [1, 2], "accuracy_scor": [1, 2, 3], "autotoken": [1, 2, 3], "automodelforsequenceclassif": 1, "trainer": [1, 2], "evalpredict": 1, "trainingargu": [1, 2], "warn": [1, 2, 3], "filterwarn": [1, 2, 3], "ignor": [1, 2, 3], "num_train_epoch": [1, 2], "total": 1, "number": [1, 2, 3], "epoch": [1, 2], "per_device_train_batch": 1, "try": [1, 3], "make": [1, 2], "larg": [1, 2], "you": [0, 1, 3], "without": [1, 2, 3], "get": 1, "cuda": [1, 2, 3], "out": [1, 2], "memori": [1, 2, 3], "error": [1, 2, 3], "eval_step": [1, 2], "interv": [1, 2], "between": 1, "two": [1, 2, 3], "should": [1, 3], "integ": [1, 2], "updat": [1, 2, 3], "step": [1, 2], "float": [1, 2], "rang": [1, 2, 3], "0": [1, 2, 3], "1": [1, 2, 3], "ratio": 1, "logging_step": [1, 2], "log": [1, 2], "save_step": [1, 2], "befor": [1, 2, 3], "checkpoint": [1, 3], "save": [1, 2, 3], "report_to": [1, 2], "platform": 1, "report": [1, 2, 3], "result": [1, 2, 3], "azure_ml": 1, "clearml": 1, "codecarbon": 1, "comet_ml": 1, "dagshub": 1, "dvclive": 1, "flyte": 1, "mlflow": 1, "neptun": 1, "tensorboard": [1, 2], "wandb": 1, "model_id": [1, 2], "googl": [1, 2, 3], "base": [1, 2, 3], "discrimin": 1, "paramet": [1, 2, 3], "dataclass": 1, "class": [1, 3], "arg": [1, 2], "str": [1, 3], "output_dir": [1, 2], "path": [1, 2, 3], "join": [1, 2, 3], "eval_dir": [1, 2], "now": [1, 2], "strftime": [1, 2], "y": [1, 2, 3], "m": [1, 2], "d": [1, 2], "h": [1, 2], "snli": 1, "max_length": [1, 3], "int": [1, 3], "128": 1, "max_train_sampl": 1, "limit": 1, "max_dev_sampl": 1, "valid": 1, "max_test_sampl": 1, "test": [1, 2], "dict": [1, 3], "mednli": 1, "mli_train_v1": [1, 2], "jsonl": [1, 2], "dev": [1, 2], "mli_dev_v1": [1, 2], "mli_test_v1": [1, 2], "training_arg": [1, 2], "do_train": [1, 2], "true": [1, 2, 3], "do_ev": [1, 2], "8": [1, 2, 3], "per_device_train_batch_s": [1, 2], "32": [1, 2, 3], "evaluation_strategi": [1, 2], "hf": [1, 3], "hub": [1, 3], "previous": [1, 2], "folder": [1, 2], "either": 1, "id": [1, 3], "see": [1, 3], "contain": 1, "config": [1, 2, 3], "save_tensor": 1, "auto": [1, 2, 3], "automat": 1, "architectur": 1, "right": [1, 3], "head": 1, "from_pretrain": [1, 2, 3], "instanti": 1, "one": 1, "input": [1, 2, 3], "librari": 1, "all": [1, 2, 3], "model_class": 1, "from_checkpoint": [1, 2], "local": [1, 2, 3], "6740": 1, "num_label": 1, "3": [1, 2, 3], "some": 1, "weight": [1, 2, 3], "electraforsequenceclassif": 1, "were": [1, 2, 3], "initi": [1, 2, 3], "newli": 1, "classifi": 1, "dens": 1, "bia": [1, 2], "out_proj": 1, "probabl": [1, 2], "down": 1, "stream": 1, "abl": 1, "predict": 1, "use_fast": 1, "print": [1, 2, 3], "f": [1, 2, 3], "memory_alloc": [1, 2, 3], "1e9": [1, 2, 3], "2f": [1, 2, 3], "gb": [1, 2, 3], "nvidia": [1, 2], "smi": [1, 2], "00": [1, 2, 3], "need": 1, "output": [1, 2, 3], "label": [1, 2, 3], "count": [1, 3], "specifi": 1, "i": [1, 2, 3], "entail": [1, 2], "neutral": [1, 2], "contradict": [1, 2], "default": 1, "format": [1, 2, 3], "appropri": 1, "each": [1, 2, 3], "line": [1, 2, 3], "premis": [1, 2], "women": 1, "embrac": 1, "hypothesi": [1, 2], "sister": 1, "hug": 1, "nli_label": 1, "load_dataset": 1, "els": [1, 2, 3], "datasetdict": 1, "def": [1, 2, 3], "prepare_label": 1, "ex": [1, 2], "To": [1, 2], "lab": 1, "return": [1, 2, 3], "split": [1, 2, 3], "kei": [1, 2], "By": 1, "loader": 1, "place": 1, "data_fil": 1, "rename_column": 1, "gold_label": [1, 2], "sentence1": [1, 2], "sentence2": [1, 2], "select_column": 1, "map": [1, 2, 3], "remov": 1, "filter": 1, "lambda": [1, 3], "valu": [1, 2, 3], "featur": [1, 2], "num_row": 1, "11232": [1, 2], "1395": [1, 2], "1422": [1, 2], "prepare_dataset": 1, "preprocess": 1, "hypothes": [1, 2], "model_max_length": 1, "tokenized_exampl": 1, "truncat": [1, 3], "pad": 1, "train_dataset": [1, 2], "train_dataset_token": 1, "batch": 1, "remove_column": 1, "column_nam": 1, "dev_dataset": 1, "dev_dataset_token": 1, "none": [1, 2, 3], "test_dataset": 1, "test_dataset_token": 1, "100": [1, 2, 3], "14380": 1, "02": [1, 3], "complet": 1, "loop": [1, 3], "implement": [1, 3], "onli": [1, 2], "pass": [1, 2], "necessari": 1, "piec": 1, "function": 1, "hyperparamet": 1, "want": [1, 2], "provid": 1, "your": 1, "own": 1, "compute_metr": 1, "wai": 1, "loss": [1, 2], "comput": [1, 2], "subclass": 1, "overrid": 1, "compute_loss": 1, "_modul": 1, "html": [1, 3], "add": [1, 3], "hook": 1, "add_callback": 1, "main_class": [1, 2], "callback": 1, "trainercallback": 1, "defin": [1, 2], "eval_predict": 1, "sentenc": [1, 2], "classif": [1, 2, 3], "accuraci": [1, 2], "argmax": 1, "axi": [1, 2], "label_id": 1, "astyp": 1, "float32": [1, 2], "mean": [1, 2], "item": [1, 3], "chang": [1, 2], "prediction_step": 1, "do": [1, 3], "start": [1, 2], "call": [1, 2], "super": 1, "modifi": 1, "eval_dataset": [1, 2], "save_model": [1, 2], "10": [1, 2, 3], "281": 1, "2808": 1, "47": [1, 2], "25": 1, "40": [1, 2, 3], "64it": 1, "7606": 1, "grad_norm": [1, 2], "5": [1, 2, 3], "441277027130127": 1, "learning_r": [1, 2], "4": [1, 2, 3], "4996438746438744e": 1, "05": [1, 2, 3], "57": 1, "eval_loss": [1, 2], "5451989769935608": 1, "eval_accuraci": 1, "7820788621902466": 1, "eval_runtim": [1, 2], "0562": 1, "eval_samples_per_second": [1, 2], "138": 1, "72": [1, 2], "eval_steps_per_second": [1, 2], "17": [1, 2, 3], "402": 1, "20": [1, 2, 3], "562": 1, "43": [1, 3], "22": 1, "38": 1, "65it": [1, 3], "5005": 1, "723459720611572": 1, "999287749287749e": 1, "6": [1, 2, 3], "52": [1, 2], "destin": 1, "directori": 1, "alreadi": 1, "exist": 1, "non": [1, 2, 3], "empti": 1, "proce": 1, "mai": [1, 2], "invalid": 1, "5031224489212036": 1, "8057347536087036": 1, "9": [1, 2, 3], "6876": 1, "143": 1, "998": 1, "18": [1, 2], "064": 1, "30": [1, 2, 3], "843": [1, 3], "08": [1, 2], "19": 1, "45": [1, 2], "66it": 1, "3853": 1, "627773284912109": 1, "498931623931624e": 1, "50": [1, 2], "5096697807312012": 1, "8179211616516113": 1, "0252": 1, "139": 1, "15": [1, 2, 3], "456": 1, "1124": 1, "11": [1, 2, 3], "36": [1, 2], "16": [1, 2, 3], "68it": [1, 3], "3047": 1, "7": [1, 2, 3], "183603286743164": 1, "9985754985754986e": 1, "46": 1, "5592992305755615": 1, "8272401690483093": 1, "0634": 1, "622": 1, "39": [1, 2, 3], "1405": 1, "14": [1, 2], "35": [1, 2, 3], "01": [1, 2, 3], "67it": 1, "2257": 1, "553471088409424": 1, "4982193732193735e": 1, "5295200943946838": 1, "8250896334648132": 1, "0387": 1, "962": 1, "432": 1, "60": [1, 2], "1686": 1, "12": [1, 2, 3], "1495": 1, "6455395221710205": 1, "997863247863248e": 1, "42": [1, 2, 3], "6505078673362732": 1, "832974910736084": 1, "056": 1, "723": [1, 3], "403": 1, "70": 1, "1967": 1, "31": [1, 3], "28": [1, 3], "114": 1, "634776592254639": 1, "4975071225071227e": 1, "41": [1, 2], "7827601432800293": 1, "0688": 1, "546": 1, "80": [1, 2, 3], "2248": 1, "23": [1, 2, 3], "69it": [1, 3], "0954": 1, "790868878364563": 1, "971509971509972e": 1, "06": [1, 2, 3], "8643640279769897": 1, "8849": 1, "141": [1, 2], "125": 1, "704": 1, "90": [1, 2], "2529": 1, "26": 1, "21": [1, 3], "0653": 1, "3601096272468567": 1, "9679487179487175e": 1, "8337998390197754": 1, "8365591168403625": 1, "8705": 1, "331": 1, "73": 1, "29": 1, "13": [1, 3], "60it": 1, "train_runtim": [1, 2], "1753": 1, "89": 1, "train_samples_per_second": [1, 2], "51": [1, 2, 3], "232": 1, "train_steps_per_second": [1, 2], "601": 1, "train_loss": [1, 2], "26511958046176837": 1, "fraction": 1, "correct": 1, "precis": [1, 2, 3], "posit": 1, "divid": [1, 3], "plu": 1, "fals": [1, 2, 3], "recal": [1, 2, 3], "neg": [1, 2], "f1": [1, 2, 3], "score": [1, 2, 3], "harmon": 1, "macro": [1, 2, 3], "averag": 1, "unweight": 1, "per": 1, "support": [1, 2, 3], "confus": [1, 2], "matrix": [1, 2], "c_": 1, "ij": 1, "equal": [1, 2], "observ": [1, 3], "known": 1, "group": [1, 3], "j": 1, "_": [1, 2, 3], "makedir": [1, 2], "exist_ok": [1, 2], "utf": 1, "mode": 1, "w": 1, "dump": 1, "y_true": [1, 2, 3], "list": [1, 3], "enumer": [1, 3], "predicted_scor": 1, "tolist": [1, 3], "predicted_label": 1, "append": [1, 2, 3], "write": [1, 2], "n": [1, 2, 3], "y_pred": [1, 2, 3], "calcul": [1, 2], "3f": [1, 2], "class_report": [1, 2, 3], "nclassif": [1, 2, 3], "conf_matrix": [1, 2], "nconfus": [1, 2], "178": 1, "21it": 1, "test_loss": 1, "982203483581543": 1, "test_accuraci": 1, "8087201118469238": 1, "test_runtim": 1, "4103": 1, "test_samples_per_second": 1, "136": 1, "596": [1, 3], "test_steps_per_second": 1, "098": 1, "809": 1, "87": [1, 2], "88": [1, 2], "462": 1, "78": 1, "77": 1, "481": 1, "76": 1, "479": 1, "81": 1, "avg": [1, 2, 3], "412": [1, 2], "27": 1, "372": 1, "34": [1, 3], "79": 1, "366": 1, "tutori": [2, 3], "7b": [2, 3], "meta": [2, 3], "13b": 2, "grade": 2, "hardwar": 2, "explain": 2, "final": 2, "benchmark": 2, "suggest": 2, "best": 2, "slightli": [2, 3], "outperform": 2, "over": [2, 3], "year": 2, "old": [2, 3], "rtx": 2, "3080": 2, "16gb": 2, "gpu": 2, "jgc128": 2, "pytorch": 2, "org": 2, "blog": 2, "finetun": 2, "timdettm": 2, "bitsandbyt": 2, "peft": 2, "www": [2, 3], "kaggl": 2, "com": [2, 3], "code": [0, 2], "lucamassaron": 2, "sentiment": 2, "analysi": 2, "gc": [2, 3], "panda": [2, 3], "pd": [2, 3], "transform": 2, "automodelforcausallm": [2, 3], "bitsandbytesconfig": [2, 3], "loraconfig": 2, "autopeftmodelforcausallm": 2, "trl": 2, "sfttrainer": 2, "tqdm": [2, 3], "is_avail": 2, "cpu": 2, "__version__": 2, "cu121": 2, "chat": 2, "474": 2, "optim": 2, "adamw_hf": 2, "adamw_torch": 2, "adamw_torch_fus": 2, "adamw_apex_fus": 2, "adamw_anyprecis": 2, "adafactor": 2, "gradient_accumulation_step": 2, "accumul": 2, "gradient": [2, 3], "backward": 2, "lr_scheduler_typ": 2, "schedul": 2, "type": 2, "learn": 2, "rate": 2, "weight_decai": 2, "decai": 2, "zero": 2, "layer": 2, "except": 2, "layernorm": 2, "max_grad_norm": 2, "maximum": 2, "norm": 2, "clip": 2, "fp16": 2, "whether": 2, "bit": 2, "mix": 2, "instead": 2, "paged_adamw_32bit": 2, "cosin": [2, 3], "2e": 2, "001": 2, "warmup_ratio": 2, "03": [2, 3], "eval_accumulation_step": 2, "less": [2, 3], "slower": 2, "prediction_loss_onli": 2, "full": 2, "gradient_checkpoint": 2, "A": [2, 3], "annot": [2, 3], "doctor": 2, "mimic": 2, "iii": 2, "v1": 2, "johnson": 2, "et": 2, "al": 2, "2016": 2, "databas": 2, "which": [2, 3], "078": 2, "705": 2, "note": 2, "written": 2, "profession": 2, "english": 2, "clinician": 2, "thei": 2, "ask": 2, "three": [2, 3], "clearli": 2, "statement": 2, "might": 2, "procedur": 2, "produc": [2, 3], "pair": [2, 3], "differ": [2, 3], "romanov": 2, "alexei": 2, "shivad": 2, "chaitanya": 2, "lesson": 2, "2018": 2, "arxiv": 2, "ab": 2, "1808": 2, "06752": 2, "read": 2, "read_jsonl": 2, "filenam": 2, "max_sampl": 2, "file": 2, "datafram": [2, 3], "splitlin": 2, "line_dict": 2, "len": [2, 3], "iloc": [2, 3], "x_train": 2, "y_train": 2, "x_dev": 2, "y_dev": 2, "x_test": 2, "y_test": 2, "No": 2, "histori": 2, "blood": 2, "clot": 2, "dvt": 2, "never": 2, "angina": 2, "had": 2, "multipl": 2, "pe": 2, "cad": 2, "past": 2, "week": 2, "pta": 2, "he": 2, "more": 2, "somnol": 2, "alert": 2, "ori": 2, "disorient": 2, "complain": 2, "weak": 2, "prompt": 2, "as_test_prompt": 2, "context": [2, 3], "determin": 2, "factual": 2, "enclos": [2, 3], "squar": 2, "bracket": 2, "end": [2, 3], "word": [2, 3], "strip": [2, 3], "gold": [2, 3], "as_prompt": 2, "reformat": 2, "column": [2, 3], "train_data": 2, "from_panda": 2, "dev_data": 2, "test_data": 2, "main": 2, "index": [2, 3], "enabl": 2, "access": [0, 2], "via": [2, 3], "k": 2, "half": 2, "ani": 2, "degrad": 2, "vector": [2, 3], "wise": 2, "most": [2, 3], "separ": 2, "treat": 2, "outlier": 2, "sever": 2, "don": 2, "t": 2, "compromis": 2, "insert": 2, "trainabl": 2, "lora": 2, "reduc": 2, "cost": 2, "repres": 2, "activ": 2, "int8": 2, "usual": 2, "point": [2, 3], "storag": 2, "energi": 2, "theori": 2, "oper": 2, "much": 2, "faster": 2, "arithmet": 2, "It": 2, "embed": 2, "sometim": 2, "doesn": 2, "extract": 2, "multipli": 2, "them": 2, "other": [2, 3], "being": 2, "dequant": 2, "back": 2, "combin": 2, "nf4": [2, 3], "bin": 2, "area": [2, 3], "under": 2, "standard": 2, "normal": [2, 3], "distribut": [2, 3], "compute_dtyp": [2, 3], "getattr": [2, 3], "float16": [2, 3], "bnb_config": [2, 3], "load_in_4bit": [2, 3], "bnb_4bit_use_double_qu": [2, 3], "bnb_4bit_quant_typ": [2, 3], "bnb_4bit_compute_dtyp": [2, 3], "device_map": [2, 3], "becaus": 2, "offload": 2, "quantization_config": [2, 3], "continu": 2, "torch_dtyp": 2, "return_dict": 2, "low_cpu_mem_usag": 2, "token": [2, 3], "fix": [2, 3], "miss": [2, 3], "pad_token": [2, 3], "add_special_token": [2, 3], "eos_token": [2, 3], "resize_token_embed": [2, 3], "use_cach": [2, 3], "pretraining_tp": [2, 3], "shard": [2, 3], "input_id": [2, 3], "return_tensor": [2, 3], "pt": [2, 3], "max_new_token": [2, 3], "do_sampl": [2, 3], "temperatur": [2, 3], "decod": [2, 3], "lower": [2, 3], "elif": 2, "verbos": [2, 3], "arrai": [2, 3], "NOT": 2, "89it": 2, "333": 2, "33": 2, "could": 2, "think": 2, "what": 2, "sai": 2, "troubl": 2, "speak": 2, "factu": 2, "pretrain": 2, "variou": 2, "extra": 2, "avoid": 2, "One": 2, "benefit": 2, "huge": 2, "work": 2, "attach": 2, "decompos": 2, "smaller": 2, "matric": 2, "These": 2, "while": 2, "keep": 2, "overal": 2, "origin": 2, "remain": 2, "frozen": 2, "receiv": 2, "further": 2, "adjust": 2, "both": 2, "qlora": 2, "prepar": 2, "wrap": 2, "configur": 2, "r": 2, "attent": 2, "dimens": 2, "lora_alpha": 2, "scale": 2, "factor": 2, "higher": 2, "alpha": 2, "assign": 2, "lora_dropout": 2, "dropout": 2, "peft_config": 2, "64": 2, "task_typ": 2, "causal_lm": 2, "sft": 2, "dataset_text_field": 2, "pack": 2, "max_seq_length": 2, "1024": 2, "17323": 2, "23797": 2, "54": 2, "reclaim": [2, 3], "no_grad": [2, 3], "empty_cach": [2, 3], "collect": 2, "training_stat": 2, "save_pretrain": 2, "422": 2, "2106": 2, "58": 2, "8024": 2, "32632938027381897": 2, "00018521172305285236": 2, "59": 2, "7946441173553467": 2, "145": 2, "5527": 2, "584": 2, "202": 2, "844": 2, "6638": 2, "3769872784614563": 2, "00013623384610073693": 2, "7909778952598572": 2, "786": 2, "839": 2, "234": 2, "1266": 2, "48": 2, "5796": 2, "4613594710826874": 2, "25118606258684e": 2, "8163220882415771": 2, "8245": 2, "836": 2, "1688": 2, "49": 2, "4816": 2, "5449468493461609": 2, "9975221274455323e": 2, "07": [2, 3], "8947425484657288": 2, "2768": 2, "602": 2, "205": [2, 3], "55": 2, "53": 2, "14153": 2, "7833": 2, "381": 2, "149": 2, "7942605955987914": 2, "seri": 2, "to_csv": 2, "incompat": 2, "30it": 2, "878": 2, "92": 2, "94": 2, "93": 2, "86": 2, "85": 2, "82": 2, "84": 2, "446": 2, "391": 2, "qa": 3, "store": 3, "document": 3, "dataset": 3, "similar": 3, "trychroma": 3, "api": 3, "stephenc222": 3, "set": 3, "sqlite": 3, "encount": 3, "issu": 3, "too": 3, "instal": 3, "pysqlite3": 3, "binari": 3, "enter": 3, "py": 3, "swap": 3, "packag": 3, "__import__": 3, "sy": 3, "modul": 3, "sqlite3": 3, "pop": 3, "manifold": 3, "tsne": 3, "matplotlib": 3, "pyplot": 3, "plt": 3, "textwrap": 3, "nn": 3, "tensor": 3, "automodel": 3, "chromadb": 3, "util": 3, "embedding_funct": 3, "embeddingfunct": 3, "home": 3, "terenc": 3, "env3": 3, "lib": 3, "python3": 3, "site": 3, "tqdmwarn": 3, "iprogress": 3, "found": 3, "pleas": 3, "jupyt": 3, "ipywidget": 3, "readthedoc": 3, "io": 3, "stabl": 3, "user_instal": 3, "autonotebook": 3, "notebook_tqdm": 3, "pqal": 3, "read_json": 3, "master": 3, "ori_pq": 3, "orient": 3, "final_decis": 3, "value_count": 3, "program": 3, "cell": 3, "death": 3, "pcd": 3, "regul": 3, "within": 3, "organ": 3, "lace": 3, "plant": 3, "aponogeton": 3, "madagascariensi": 3, "perfor": 3, "leav": 3, "through": 3, "consist": 3, "latticework": 3, "longitudin": 3, "transvers": 3, "vein": 3, "areol": 3, "occur": 3, "center": 3, "progress": 3, "outward": 3, "stop": 3, "approxim": 3, "five": 3, "vasculatur": 3, "role": 3, "mitochondria": 3, "dure": 3, "recogn": 3, "anim": 3, "howev": 3, "studi": 3, "paper": 3, "elucid": 3, "mitochondri": 3, "dynam": 3, "development": 3, "vivo": 3, "singl": 3, "window": 3, "stage": 3, "leaf": 3, "undergo": 3, "npcd": 3, "earli": 3, "epcd": 3, "late": 3, "lpcd": 3, "stain": 3, "dye": 3, "mitotrack": 3, "red": 3, "cmxro": 3, "examin": 3, "delin": 3, "four": 3, "categori": 3, "m1": 3, "m4": 3, "characterist": 3, "includ": 3, "motil": 3, "membran": 3, "\u03b4\u03c8m": 3, "tunel": 3, "assai": 3, "fragment": 3, "ndna": 3, "chloroplast": 3, "transvacuolar": 3, "strand": 3, "live": 3, "imag": 3, "possibl": 3, "permeabl": 3, "transit": 3, "pore": 3, "ptp": 3, "indirectli": 3, "cyclosporin": 3, "csa": 3, "treatment": 3, "significantli": 3, "compar": 3, "control": 3, "displai": 3, "plai": 3, "remodel": 3, "ye": 3, "552": 3, "338": 3, "mayb": 3, "110": 3, "name": 3, "dtype": 3, "int64": 3, "db_path": 3, "chroma_cli": 3, "persistentcli": 3, "cprefix": 3, "pubmedqa_": 3, "col": 3, "list_collect": 3, "delet": 3, "startswith": 3, "delete_collect": 3, "emb": 3, "text": 3, "metadata": 3, "state": 3, "l2": 3, "minilm": 3, "l6": 3, "v2": 3, "default_nam": 3, "get_or_create_collect": 3, "hnsw": 3, "space": 3, "embedding_model": 3, "string": 3, "x": 3, "to_list": 3, "max": 3, "2725": 3, "row": 3, "query_text": 3, "n_result": 3, "sbert": 3, "net": 3, "pretrained_model": 3, "other_nam": 3, "neuml": 3, "pubmedbert": 3, "other_id": 3, "other_model": 3, "sentencetransformerembeddingfunct": 3, "model_nam": 3, "custom_nam": 3, "thenlper": 3, "gte": 3, "_model": 3, "_token": 3, "custom_id": 3, "inherit": 3, "customembeddingfunct": 3, "github": 3, "__call__": 3, "self": 3, "generate_embed": 3, "inspir": 3, "card": 3, "average_pool": 3, "last_hidden_st": 3, "attention_mask": 3, "last_hidden": 3, "masked_fil": 3, "bool": 3, "sum": 3, "dim": 3, "512": 3, "p": 3, "option": 3, "custom_model": 3, "check": 3, "given": 3, "from_dict": 3, "1000it": 3, "24": 3, "08it": 3, "37it": 3, "73it": 3, "pubmedqa_al": 3, "969": 3, "pubmedqa_pubmedbert": 3, "979": 3, "pubmedqa_gt": 3, "988": 3, "close": 3, "togeth": 3, "2d": 3, "max_tsn": 3, "extend": 3, "1000": 3, "11it": 3, "85it": 3, "tsne_plot": 3, "tsne_model": 3, "perplex": 3, "early_exagger": 3, "n_compon": 3, "init": 3, "pca": 3, "n_iter": 3, "random_st": 3, "new_valu": 3, "fit_transform": 3, "figur": 3, "figsiz": 3, "is_queri": 3, "scatter": 3, "color": 3, "c": 3, "xy": 3, "xytext": 3, "textcoord": 3, "offset": 3, "va": 3, "bottom": 3, "top": 3, "titl": 3, "sampl": 3, "sentence_transform": 3, "cos_sim": 3, "custom_embed": 3, "other_embed": 3, "0158": 3, "round": 3, "300e": 3, "820e": 3, "890e": 3, "320e": 3, "990e": 3, "530e": 3, "660e": 3, "590e": 3, "380e": 3, "950e": 3, "050e": 3, "090e": 3, "080e": 3, "960e": 3, "140e": 3, "750e": 3, "360e": 3, "440e": 3, "600e": 3, "620e": 3, "290e": 3, "680e": 3, "400e": 3, "930e": 3, "100e": 3, "570e": 3, "770e": 3, "730e": 3, "000e": 3, "810e": 3, "110e": 3, "230e": 3, "370e": 3, "840e": 3, "430e": 3, "180e": 3, "720e": 3, "350e": 3, "04": 3, "700e": 3, "690e": 3, "200e": 3, "830e": 3, "340e": 3, "190e": 3, "550e": 3, "470e": 3, "920e": 3, "580e": 3, "030e": 3, "800e": 3, "520e": 3, "240e": 3, "980e": 3, "910e": 3, "310e": 3, "270e": 3, "170e": 3, "630e": 3, "070e": 3, "020e": 3, "010e": 3, "250e": 3, "760e": 3, "970e": 3, "160e": 3, "940e": 3, "870e": 3, "420e": 3, "900e": 3, "130e": 3, "120e": 3, "220e": 3, "790e": 3, "330e": 3, "710e": 3, "560e": 3, "210e": 3, "460e": 3, "390e": 3, "610e": 3, "040e": 3, "150e": 3, "780e": 3, "540e": 3, "480e": 3, "490e": 3, "500e": 3, "740e": 3, "260e": 3, "860e": 3, "060e": 3, "670e": 3, "280e": 3, "510e": 3, "650e": 3, "880e": 3, "850e": 3, "057e": 3, "640e": 3, "061e": 3, "410e": 3, "1550e": 3, "9460e": 3, "2040e": 3, "3700e": 3, "7920e": 3, "3200e": 3, "7090e": 3, "8380e": 3, "1830e": 3, "1450e": 3, "7880e": 3, "7070e": 3, "7700e": 3, "7790e": 3, "6290e": 3, "6510e": 3, "8680e": 3, "4990e": 3, "5590e": 3, "2150e": 3, "6300e": 3, "3800e": 3, "0400e": 3, "1200e": 3, "7300e": 3, "3920e": 3, "9240e": 3, "1250e": 3, "8400e": 3, "1068e": 3, "5580e": 3, "8530e": 3, "5600e": 3, "7450e": 3, "8300e": 3, "1870e": 3, "5930e": 3, "2110e": 3, "8610e": 3, "3670e": 3, "6800e": 3, "6960e": 3, "1697e": 3, "9950e": 3, "2570e": 3, "0870e": 3, "2460e": 3, "3210e": 3, "1790e": 3, "1810e": 3, "6200e": 3, "4490e": 3, "4740e": 3, "8160e": 3, "6350e": 3, "3840e": 3, "5400e": 3, "3766e": 3, "9160e": 3, "6140e": 3, "0700e": 3, "5770e": 3, "0532e": 3, "2730e": 3, "5665e": 3, "9120e": 3, "8190e": 3, "2830e": 3, "0310e": 3, "4450e": 3, "1526e": 3, "2390e": 3, "0000e": 3, "7380e": 3, "2370e": 3, "9490e": 3, "6900e": 3, "6530e": 3, "2500e": 3, "4210e": 3, "3950e": 3, "1080e": 3, "6110e": 3, "9080e": 3, "8210e": 3, "0360e": 3, "4110e": 3, "4830e": 3, "1840e": 3, "0110e": 3, "8290e": 3, "5470e": 3, "3930e": 3, "6430e": 3, "9100e": 3, "8000e": 3, "0590e": 3, "4610e": 3, "4240e": 3, "6340e": 3, "9300e": 3, "3020e": 3, "0570e": 3, "9760e": 3, "5700e": 3, "1270e": 3, "4900e": 3, "5780e": 3, "9830e": 3, "8240e": 3, "4800e": 3, "6410e": 3, "3530e": 3, "0220e": 3, "3290e": 3, "4310e": 3, "5610e": 3, "3220e": 3, "8580e": 3, "6100e": 3, "1380e": 3, "3590e": 3, "6120e": 3, "0720e": 3, "9640e": 3, "1230e": 3, "9870e": 3, "6610e": 3, "4340e": 3, "5290e": 3, "3160e": 3, "3140e": 3, "0208e": 3, "1560e": 3, "8080e": 3, "1260e": 3, "8040e": 3, "1170e": 3, "9070e": 3, "2600e": 3, "9350e": 3, "3890e": 3, "8440e": 3, "3250e": 3, "8540e": 3, "4970e": 3, "5310e": 3, "5080e": 3, "0920e": 3, "2860e": 3, "4890e": 3, "9940e": 3, "6810e": 3, "9820e": 3, "8600e": 3, "1920e": 3, "7430e": 3, "4550e": 3, "7780e": 3, "5060e": 3, "2280e": 3, "8640e": 3, "2140e": 3, "0600e": 3, "9500e": 3, "7520e": 3, "7040e": 3, "1820e": 3, "0980e": 3, "0806e": 3, "5210e": 3, "7100e": 3, "7120e": 3, "8880e": 3, "0840e": 3, "2000e": 3, "0250e": 3, "3310e": 3, "0580e": 3, "7010e": 3, "2800e": 3, "0160e": 3, "7680e": 3, "7440e": 3, "1280e": 3, "2200e": 3, "3720e": 3, "3540e": 3, "9750e": 3, "2100e": 3, "5390e": 3, "1680e": 3, "4560e": 3, "5040e": 3, "0230e": 3, "0950e": 3, "5320e": 3, "5280e": 3, "5490e": 3, "8480e": 3, "7990e": 3, "4040e": 3, "2170e": 3, "6490e": 3, "4140e": 3, "1330e": 3, "6170e": 3, "3660e": 3, "5100e": 3, "1930e": 3, "7610e": 3, "3760e": 3, "1400e": 3, "3040e": 3, "3830e": 3, "3100e": 3, "8620e": 3, "3470e": 3, "7000e": 3, "1960e": 3, "3309e": 3, "1770e": 3, "9910e": 3, "6690e": 3, "5790e": 3, "0900e": 3, "8650e": 3, "1850e": 3, "3000e": 3, "9680e": 3, "3510e": 3, "5990e": 3, "8980e": 3, "6030e": 3, "0914e": 3, "5240e": 3, "3300e": 3, "5950e": 3, "8510e": 3, "6040e": 3, "6930e": 3, "9170e": 3, "6180e": 3, "8870e": 3, "9600e": 3, "8100e": 3, "8820e": 3, "7730e": 3, "5150e": 3, "2810e": 3, "3150e": 3, "4700e": 3, "4780e": 3, "7540e": 3, "8020e": 3, "2930e": 3, "3500e": 3, "9970e": 3, "1600e": 3, "4370e": 3, "2940e": 3, "4290e": 3, "1390e": 3, "1030e": 3, "8180e": 3, "4660e": 3, "0390e": 3, "4910e": 3, "0240e": 3, "2240e": 3, "9580e": 3, "0544e": 3, "3910e": 3, "0990e": 3, "3400e": 3, "2300e": 3, "1900e": 3, "5980e": 3, "6080e": 3, "9360e": 3, "7560e": 3, "7960e": 3, "7940e": 3, "4880e": 3, "8860e": 3, "7980e": 3, "1332e": 3, "2950e": 3, "7200e": 3, "9380e": 3, "9150e": 3, "3240e": 3, "0650e": 3, "9730e": 3, "0550e": 3, "2870e": 3, "1220e": 3, "9720e": 3, "0210e": 3, "7740e": 3, "8810e": 3, "7400e": 3, "5920e": 3, "2700e": 3, "2220e": 3, "1940e": 3, "4000e": 3, "8790e": 3, "0300e": 3, "3710e": 3, "1070e": 3, "6660e": 3, "5000e": 3, "8070e": 3, "0530e": 3, "2650e": 3, "0690e": 3, "0450e": 3, "2900e": 3, "9290e": 3, "5220e": 3, "1760e": 3, "2740e": 3, "4100e": 3, "0520e": 3, "0800e": 3, "1610e": 3, "3520e": 3, "1700e": 3, "3560e": 3, "3480e": 3, "9250e": 3, "3010e": 3, "9060e": 3, "7550e": 3, "8670e": 3, "3340e": 3, "7110e": 3, "5510e": 3, "7080e": 3, "6520e": 3, "7290e": 3, "8430e": 3, "6260e": 3, "2490e": 3, "6160e": 3, "2080e": 3, "2910e": 3, "0280e": 3, "6620e": 3, "0820e": 3, "2704e": 3, "1140e": 3, "7320e": 3, "1060e": 3, "6870e": 3, "1640e": 3, "8230e": 3, "0470e": 3, "2230e": 3, "5230e": 3, "3130e": 3, "5270e": 3, "2309e": 3, "5940e": 3, "6280e": 3, "3380e": 3, "8800e": 3, "6330e": 3, "0010e": 3, "4950e": 3, "6500e": 3, "3430e": 3, "9650e": 3, "1240e": 3, "8250e": 3, "5850e": 3, "0790e": 3, "0985e": 3, "7760e": 3, "4820e": 3, "4390e": 3, "0340e": 3, "9510e": 3, "2980e": 3, "7480e": 3, "9700e": 3, "2760e": 3, "1780e": 3, "1300e": 3, "0460e": 3, "8090e": 3, "8850e": 3, "7600e": 3, "8150e": 3, "7310e": 3, "1800e": 3, "0270e": 3, "0503e": 3, "1350e": 3, "5200e": 3, "0103e": 3, "7630e": 3, "7230e": 3, "0660e": 3, "1420e": 3, "6190e": 3, "6640e": 3, "6720e": 3, "9677e": 3, "6840e": 3, "9400e": 3, "5500e": 3, "6700e": 3, "1490e": 3, "2190e": 3, "2430e": 3, "8140e": 3, "5690e": 3, "4470e": 3, "8570e": 3, "0040e": 3, "0640e": 3, "4580e": 3, "5300e": 3, "5130e": 3, "2350e": 3, "5800e": 3, "2420e": 3, "5900e": 3, "7710e": 3, "8450e": 3, "7130e": 3, "1510e": 3, "2010e": 3, "7970e": 3, "9010e": 3, "2560e": 3, "5650e": 3, "2770e": 3, "5020e": 3, "1620e": 3, "5030e": 3, "8630e": 3, "9000e": 3, "7500e": 3, "5548e": 3, "3280e": 3, "2250e": 3, "7840e": 3, "1202e": 3, "4640e": 3, "7350e": 3, "8120e": 3, "0070e": 3, "1890e": 3, "1750e": 3, "4600e": 3, "6940e": 3, "1951e": 3, "0060e": 3, "9690e": 3, "5530e": 3, "7890e": 3, "6740e": 3, "2990e": 3, "1910e": 3, "2750e": 3, "1044e": 3, "8930e": 3, "4720e": 3, "4980e": 3, "6150e": 3, "0380e": 3, "7830e": 3, "0200e": 3, "2660e": 3, "2920e": 3, "0170e": 3, "4120e": 3, "0190e": 3, "6220e": 3, "2340e": 3, "1000e": 3, "8550e": 3, "4760e": 3, "6060e": 3, "6000e": 3, "4030e": 3, "7220e": 3, "3393e": 3, "9440e": 3, "8830e": 3, "9790e": 3, "0440e": 3, "4840e": 3, "1530e": 3, "1630e": 3, "3170e": 3, "0330e": 3, "5160e": 3, "4270e": 3, "5640e": 3, "7870e": 3, "4200e": 3, "5170e": 3, "1570e": 3, "4160e": 3, "5710e": 3, "1860e": 3, "3810e": 3, "5140e": 3, "0500e": 3, "0090e": 3, "4250e": 3, "6580e": 3, "4150e": 3, "1500e": 3, "5360e": 3, "7250e": 3, "attempt": 3, "alloc": 3, "after": 3, "default_rol": 3, "help": 3, "skip_special_token": 3, "alwai": 3, "prepend": 3, "system": 3, "input_len": 3, "top_p": 3, "del": 3, "get_answ": 3, "gemm": 3, "prepare_prompt_gemma": 3, "concis": 3, "prepare_prompt_llama": 3, "prepare_prompt": 3, "e": 3, "choic": 3, "NO": 3, "WITH": 3, "depend": 3, "match": 3, "case": 3, "digit": 3, "367": 3, "375": 3, "doe": 3, "describ": 3, "09": 3, "065": 3, "018": 3, "028": 3, "587": 3, "846": 3, "693": 3, "797": 3, "696": 3, "743": 3, "672": 3, "483": 3, "520": 3, "488": 3, "645": 3, "647": 3, "069": 3, "029": 3, "591": 3, "703": 3, "747": 3, "676": 3, "486": 3, "522": 3, "491": 3, "651": 3, "56": 3, "067": 3, "594": 3, "697": 3, "798": 3, "708": 3, "750": 3, "678": 3, "523": 3, "492": 3, "648": 3, "653": 3, "79it": 3, "699": 3, "679": 3, "487": 3, "524": 3, "493": 3, "649": 3, "654": 3, "01it": 3, "167": 3, "036": 3, "060": 3, "463": 3, "408": 3, "434": 3, "603": 3, "741": 3, "665": 3, "551": 3, "411": 3, "395": 3, "386": 3, "508": 3, "introduct": 3, "primari": 3, "care": 3, "416": 3, "424": 3, "autom": 3, "175": 3, "227": 3, "198": 3, "667": 3, "675": 3, "671": 3, "775": 3, "748": 3, "652": 3, "539": 3, "542": 3, "661": 3, "63it": 3, "182": 3, "236": 3, "206": 3, "680": 3, "730": 3, "752": 3, "658": 3, "545": 3, "548": 3, "677": 3, "59it": 3, "181": 3, "688": 3, "776": 3, "739": 3, "757": 3, "549": 3, "547": 3, "681": 3, "670": 3, "61it": 3, "26it": 3, "099": 3, "464": 3, "163": 3, "397": 3, "080": 3, "133": 3, "571": 3, "431": 3, "316": 3, "356": 3, "325": 3, "262": 3, "460": 3, "334": 3, "summari": 3, "present": 0, "python": 0, "link": 0, "below": 0, "menu": 0}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"self": 0, "learn": 0, "tutori": 0, "download": 0, "fine": [1, 2], "tune": [1, 2], "electra": 1, "encod": 1, "transform": [1, 3], "model": [1, 2, 3], "medic": [1, 2, 3], "nli": [1, 2], "task": [1, 2], "set": [1, 2], "paramat": 1, "load": [1, 2, 3], "token": 1, "dataset": [1, 2], "prepar": [1, 3], "data": [1, 3], "train": [1, 2], "evalu": [1, 2, 3], "llm": 2, "from": 2, "hf": 2, "hub": 2, "checkpoint": 2, "argument": 2, "get": 2, "mednli": 2, "quantiz": 2, "pre": 2, "helper": [2, 3], "predict": 2, "gener": [2, 3], "respons": [2, 3], "retriev": 3, "augment": 3, "question": 3, "answer": 3, "pubmedqa": 3, "articl": 3, "chroma": 3, "client": 3, "default": 3, "embed": 3, "creat": 3, "databas": 3, "collect": 3, "queri": 3, "an": 3, "exampl": 3, "altern": 3, "can": 3, "ani": 3, "sentenc": 3, "Or": 3, "custom": 3, "function": 3, "comput": 3, "retrievel": 3, "accuraci": 3, "t": 3, "sne": 3, "plot": 3, "prompt": 3, "chat": 3, "To": 3}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 57}, "alltitles": {"Fine-tune Electra encoder transformer model for Medical NLI task": [[1, "fine-tune-electra-encoder-transformer-model-for-medical-nli-task"]], "Set paramaters": [[1, "set-paramaters"]], "Load the model and tokenizer": [[1, "load-the-model-and-tokenizer"]], "Load dataset": [[1, "load-dataset"]], "Prepare data": [[1, "prepare-data"]], "Train model": [[1, "train-model"], [2, "train-model"]], "Evaluate model": [[1, "evaluate-model"]], "Fine-tune LLM for Medical NLI task": [[2, "fine-tune-llm-for-medical-nli-task"]], "Load model from HF hub or checkpoint": [[2, "load-model-from-hf-hub-or-checkpoint"]], "Set training arguments": [[2, "set-training-arguments"]], "Get mednli dataset": [[2, "get-mednli-dataset"]], "Get quantized pre-trained model": [[2, "get-quantized-pre-trained-model"]], "Helpers for evaluating model predictions": [[2, "helpers-for-evaluating-model-predictions"]], "Generates responses and evaluate model": [[2, "generates-responses-and-evaluate-model"]], "Retrieval-Augmented Generation for Medical Question-Answering": [[3, "retrieval-augmented-generation-for-medical-question-answering"]], "Load pubmedqa articles and questions": [[3, "load-pubmedqa-articles-and-questions"]], "Load chroma client and default embedding model": [[3, "load-chroma-client-and-default-embedding-model"]], "Create database collection with default embedding model": [[3, "create-database-collection-with-default-embedding-model"]], "Load data into database": [[3, "load-data-into-database"]], "Query and retrieve an example": [[3, "query-and-retrieve-an-example"]], "Create collections with alternate embedding models": [[3, "create-collections-with-alternate-embedding-models"]], "Can be any sentence-transformer model": [[3, "can-be-any-sentence-transformer-model"]], "Or custom embedding function": [[3, "or-custom-embedding-function"]], "Compute retrievel accuracy of the embeddings models": [[3, "compute-retrievel-accuracy-of-the-embeddings-models"]], "t-SNE plot of embeddings": [[3, "t-sne-plot-of-embeddings"]], "Helpers to prepare prompt and generate chat": [[3, "helpers-to-prepare-prompt-and-generate-chat"]], "To generate response": [[3, "to-generate-response"]], "To create prompt": [[3, "to-create-prompt"]], "Evaluate models": [[3, "evaluate-models"]], "SELF-LEARNING TUTORIAL": [[0, "self-learning-tutorial"]], "Downloads": [[0, "downloads"]]}, "indexentries": {}})