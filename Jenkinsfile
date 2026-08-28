pipeline {
    agent any

    environment {
        IMAGE_NAME = 'node-docker-hello'
        CONTAINER_NAME = 'node-docker-hello'
        APP_PORT = '8000'
    }

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:%BUILD_NUMBER% .'
            }
        }

        stage('Stop Existing Container') {
            steps {
                bat 'docker rm -f %CONTAINER_NAME% 2>nul || exit /b 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d --name %CONTAINER_NAME% -p %APP_PORT%:8000 %IMAGE_NAME%:%BUILD_NUMBER%'
            }
        }

        stage('Verify') {
            steps {
                bat 'timeout /t 5 /nobreak'
                bat 'curl -f http://localhost:%APP_PORT%'
            }
        }
    }

    post {
        success {
            echo 'Application deployed successfully!'
        }

        failure {
            echo 'Deployment failed.'
        }
    }
}
