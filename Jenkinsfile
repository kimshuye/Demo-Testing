pipeline {
  agent any
  stages {
    stage('install dependency') {
      steps {
        sh 'make install_dependency_frontend'
      }
    }

    stage('code analysis') {
      parallel {
        stage('code analysis frontend') {
          steps {
            sh 'make code_analysis_frontend'
          }
        }

      }
    }

    stage('run unit test') {
      parallel {
        stage('code analysis frontend') {
          steps {
            sh 'make run_unittest_frontend'
          }
        }

      }
    }


    // stage('build') {
    //   parallel {
    //     stage('build frontend') {
    //       steps {
    //         sh 'make build_frontend'
    //       }
    //     }
    //   }
    // }

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