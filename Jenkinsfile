pipeline{
	agent {label "Jenkins Agent"}

	stages {
		stage('Build') {
			steps {
				bat 'docker build -t npivalica/nodeapp:latest .'
			}
		}

		stage('Login') {
			steps {
				withCredentials([usernamePassword( credentialsId: 'dockerhub-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
					bat "docker login -u ${USERNAME} -p ${PASSWORD}"
				}
			}
		}

		stage('Push') {
			steps {
				bat 'docker push npivalica/nodeapp:latest'
			}
		}
	}

	post {
		always {
			bat 'docker logout'
		}
	}

}