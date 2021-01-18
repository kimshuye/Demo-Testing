
frontend: install_dependency_frontend code_analysis_frontend run_unittest_frontend run_e2e_frontend build_frontend

run_frontend: build_frontend webstore_start

install_dependency_frontend:
	cd sc-webstore && npm install
code_analysis_frontend:
	cd sc-webstore && npm run lint
run_unittest_frontend:
	cd sc-webstore && npm run test
build_frontend:
	sudo docker-compose build webstore
run_e2e_frontend:
	cd sc-webstore && npm run e2e

webstore_start:
	sudo docker-compose up -d webstore

start_service:
	sudo docker-compose up -d


stop_service:
	sudo docker-compose down


