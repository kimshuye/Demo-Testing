pipeline {
  agent none

  stages {
      

    stage('code analysis') {
        agent {
            docker { image 'node:15.4.0' } 
        }
        
            stage('code analysis frontend') {
                steps {
                    sh 'make install_dependency_frondend'
                    sh 'make code_analysis_frontend' 
                }
            }
            
        
    }

    stage('run unit test') {
        agent {
            docker { image 'node:15.4.0' } 
        }
        
            stage('unittest frontend') {
                steps {
                    sh 'make install_dependency_frondend'
                    sh 'make run_unittest_frontend'
                }
            }
        
    }

    stage('run e2e test') {
        agent {
            docker { image 'node:15.4.0' } 
        }
        
            stage('e2e test frontend') {
                steps {
                    sh 'make install_dependency_frondend'
                    sh 'make run_e2e_frontend'
                }
            }
        
    }

    stage('build') {
        
            stage('build frontend') {
                steps {
                    sh 'make build_frontend'
                }
            }
        
    }
    
  }
}
