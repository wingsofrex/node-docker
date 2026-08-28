pipeline {
    agent any

    environment {
        IMAGE_NAME = 'node-docker-hello'
        CONTAINER_NAME = 'node-docker-hello'
        APP_PORT = '8000'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/wingsofrex/node-docker.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} .'
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh '''
                    docker rm -f ${CONTAINER_NAME} || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                    docker run -d \
                      --name ${CONTAINER_NAME} \
                      -p ${APP_PORT}:8000 \
                      ${IMAGE_NAME}:${BUILD_NUMBER}
                '''
            }
        }

        stage('Verify') {
            steps {
                sh '''
                    sleep 5
                    curl -f http://localhost:${APP_PORT}
                '''
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
