
frontend: install_dependency_frondend code_analysis_frontend run_unittest_frontend build_frontend

frontend_e2e: start_projects run_e2e_frontend

install_dependency_frondend:
	cd sc-webstore && npm install
code_analysis_frontend:
	cd sc-webstore && npm run lint
run_unittest_frontend:
	cd sc-webstore && npm run test
build_frontend:
	docker-compose build webstore

start_projects:
	docker-compose up -d

run_e2e_frontend:
	cd sc-webstore && npm run e2e

