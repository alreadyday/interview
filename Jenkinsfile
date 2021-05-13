pipeline {
    environment {
        // set environement variable
    }

    agent {
        // set node label
    }

    stages {
        stage("Pull Git") {
            steps {
                // pull git
            }
        }

        stage("Prepare Test ENV") {
            steps {
                script {
                    // build docker
                }
            }
        }


        stage("Run Test") {
            parallel {
                stage ("Code Check") {
                    steps {
                        // run lint
                    }
                }

                stage ("Unit Test") {
                    steps {
                        script {
                            // run unit test
                        }
                    }
                }
            }
        }

        stage("Build") {

            steps {
                // run build
            }
        }
    }

    post {
        always {
            script {
                // clean up
            }
        }
    }
}
