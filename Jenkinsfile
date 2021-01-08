
pipeline {
    agent any

    stage('Test') {
        steps {
            echo 'make frontend'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

