const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://localhost:9000',
        options : {
            'sonar.login' : 'valor-token-gerado-sonar', //valor do token gerado no sonarqube
            'sonar.projectKey' : 'nodejs-api', //chave do projeto gerado no sonarqube "projectkey"
            'sonar.sources':  '.',
            'sonar.tests':  '.',
            'sonar.inclusions'  :  'index.js', 
            'sonar.test.inclusions':  'index.test.js', //arquivo que será realizado os testes unitários
            'sonar.javascript.lcov.reportPaths':  './coverage/lcov.info'
        }
    }, () => {});