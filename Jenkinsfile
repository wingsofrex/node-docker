pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        IMAGE_NAME = 'node-docker-hello'
        CONTAINER_NAME = 'node-docker-hello'
        APP_PORT = '8001'
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh '''
                    echo "========================================"
                    echo "Building Docker image"
                    echo "========================================"

                    docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} .
                '''
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh '''
                    echo "========================================"
                    echo "Removing existing container"
                    echo "========================================"

                    docker rm -f ${CONTAINER_NAME} 2>/dev/null || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                    echo "========================================"
                    echo "Starting Docker container"
                    echo "========================================"

                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${APP_PORT}:${APP_PORT} \
                        ${IMAGE_NAME}:${BUILD_NUMBER}
                '''
            }
        }

        stage('Verify Application') {
            steps {
                sh '''
                    echo "========================================"
                    echo "Waiting for application"
                    echo "========================================"

                    sleep 5

                    echo "========================================"
                    echo "Testing application"
                    echo "========================================"

                    curl -f http://localhost:${APP_PORT}
                '''
            }
        }
    }

    post {
        success {
            echo '========================================'
            echo 'Deployment successful!'
            echo 'Application: http://EC2-PUBLIC-IP:8001'
            echo '========================================'
        }

        failure {
            echo '========================================'
            echo 'Deployment failed!'
            echo '========================================'
        }
    }
}
