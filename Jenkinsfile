pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        echo "📥 Pulling source code..."
        checkout scm
      }
    }

    stage('Build Docker Containers') {
      steps {
        echo "🐳 Building Docker images..."
        sh 'docker compose build'
      }
    }

    stage('Deploy Containers') {
      steps {
        echo "🚀 Deploying with Docker Compose..."
        sh '''
        docker compose down
        docker compose up -d
        '''
      }
    }
  }
}
