pipeline {
  agent any
  stages {
    stage('install dependency') {
      agent {
        docker { image 'node:15.4.0' }
      }
      steps {
        // sh 'make install_dependency_frontend'
        sh 'cd sc-webstore && npm install'
      }
    }

    stage('Run Test') {
      parallel {
        stage('code analysis frontend') {
          agent {
            docker { image 'node:15.4.0' }
          }
          steps {
            // sh 'make code_analysis_frontend'
            sh 'cd sc-webstore && npm run lint'
          }
        }
        stage('run unittest frontend') {
          steps {
            // sh 'make run_unittest_frontend'
            sh 'cd sc-webstore && npm run test'
          }
        }

      }
    }
    
    stage('Test build Image') {
      parallel {
        stage('build frontend') {
          steps {
            sh 'id'
            sh 'groups'
            // sh 'make build_frontend'
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