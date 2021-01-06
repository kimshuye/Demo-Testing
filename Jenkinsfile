pipeline {
  agent none

  stages {

    agent {
        docker { image 'node:15.4.0' } 
    }
    
    stage('install dependency') {
      steps {
        sh 'make install_dependency_frondend'
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
