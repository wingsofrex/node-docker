environment {
    IMAGE_NAME = 'node-docker-hello'
    CONTAINER_NAME = 'node-docker-hello'
    APP_PORT = '8001'
}

stage('Run Container') {
    steps {
        bat 'docker run -d --name %CONTAINER_NAME% -p %APP_PORT%:8001 %IMAGE_NAME%:%BUILD_NUMBER%'
    }
}

stage('Verify') {
    steps {
        bat 'timeout /t 5 /nobreak'
        bat 'curl -f http://localhost:%APP_PORT%'
    }
}
