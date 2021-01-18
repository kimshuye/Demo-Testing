pipeline {
  environment {
    // registry = "docker_hub_account/repository_name"
    registryCredential = 'dockerhub'
  }
  agent any
  tools {
    nodejs "node"
  }
  stages {
    stage('install dependency') {
      steps {
        sh 'cd sc-webstore && npm install'
      }
    }

    stage('Run Test') {
      parallel {
        stage('code analysis frontend') {
          steps {
            sh 'cd sc-webstore && npm run lint'
          }
        }
        stage('run unittest frontend') {
          steps {
            sh 'cd sc-webstore && npm run test'
          }
        }

      }
    }
    
    stage('Test build Image') {
      parallel {
        stage('build frontend') {
          steps {
            sh 'go'
            // sh 'docker-compose build webstore'
          }
        }
      }
    }

    // stage('Start All Service') {
    //   steps {
    //     sh 'make start_service' 
    //   }
    // }

  }

//   post {
//     always {
//       sh 'make stop_service'
//     }
//   }

}