pipeline {
  agent any

  environment {
    GITHUB_NODE_VERSION = "15.4.0"
    SERVICE_LOCALTION1 = "sc-webstore"
    DOCKERFILE_LOCALTION1 = "Dockerfile"
    SERVICE_NAME1 = "webstore"
    CONTAINER_NAME1 = "sc.webstore"
    HOST_NAME1 = "sc.webstore"
    IMAGE_ORG1 = "tokdev"
    IMAGE_NAME1 = "sc.webstore"
    IMAGE_TAG1 = "1.0.0"
  }

  stages {

    stage('install dependency') {
      steps {
        sh 'cd sc-webstore && npm install'
      }
    }

    stage('code analysis') {
      parallel {
        stage('code analysis frontend') {
          steps {
            sh 'cd sc-webstore && npm run lint' 
          }
        }
        
      }
    }

    stage('run unit test') {
      parallel {
        stage('unittest frontend') {
          steps {
            sh 'cd sc-webstore && npm run test'
          }
        }
      }
    }

    stage('run e2e test') {
      parallel {
        stage('e2e test frontend') {
          steps {
            sh 'cd sc-webstore && npm run e2e'
          }
        }
      }
    }

    stage('build') {
      parallel {
        stage('build frontend') {
          steps {
            sh 'make build_frontend'
          }
        }
      }      
    }
    
  }
}
