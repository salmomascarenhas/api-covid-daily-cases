
  # Backend Challenge 🏅 2022 - Covid Daily Cases
  API desenvolvida para o desafio do processo seletivo da empresa BeTruck na vaga de JavaScript Backend Developer.
  
## Sobre o desafio
API Rest que utiliza o histórico de casos de Covid ([Kaggle](https://www.kaggle.com/yamqwe/omicron-covid19-variant-daily-cases))  para exibir o número de casos por país, dia e variante.

## Executando aplicação
In the root of the project open the terminal and execute the commands below.

	# Building an image from your Dockerfile in the root.
	
	$ docker build -t app-test .
	
	# Running your image mapping the project's volume (on 
	# container) with your project's files (in # # your 
	# machine host) and exposing the project execution on 
	# port 3000 (localhost).

	$ docker run -p 3000:3000 -v $(pwd):/app app-test

## Referência
[README REFERÊNCIA](https://lab.coodesh.com/salmo/covid-daily-cases-20220127/-/blob/main/README.md)