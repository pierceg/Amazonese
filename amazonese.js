// Checking page title
if (document.title.indexOf("AWS Management Console") != -1) {
    //Creating Elements

    var svcs = document.getElementsByClassName("serviceName");
  	for (var i=0; i<svcs.length; i++){
  		var serviceName = svcs[i].innerHTML;
        var newStr = '';
		switch(serviceName) {
			case 'EC2': newStr = 'Virtual Servers'; break;
            case 'EC2 Container Service': newStr = 'Docker As A Service'; break;
            case 'Elastic Beanstalk': newStr = 'Platform As A Service'; break;
            case 'Lambda': newStr = 'Response Scripts'; break;
            case 'S3': newStr = 'Unlimited FTP Server'; break;
            case 'CloudFront': newStr = 'Content Delivery Network'; break;
            case 'Elastic File System': newStr = 'EC2 File Management'; break;
            case 'Glacier': newStr = 'S3 Redundant Backups'; break;
            case 'Storage Gateway': newStr = 'S3 Network Integration'; break;
            case 'RDS': newStr = 'Amazon SQL'; break;
            case 'DynamoDB': newStr = 'Amazon NoSQL'; break;
            case 'ElastiCache': newStr = 'Memcached'; break;
            case 'Redshift': newStr = 'Data Warehouse'; break;
            case 'VPC': newStr = 'Virtual Colocated Rack'; break;
            case 'Route 53': newStr = 'DNS + Domains'; break;
            case 'CodeCommit': newStr = 'Amazon Github'; break;
            case 'CodePipeline': newStr = 'Continuous Integration'; break;
            case 'CloudWatch': newStr = 'Status Pager'; break;
            case 'CloudFormation': newStr = 'Services Setup'; break;
            case 'CloudTrail': newStr = 'Logging'; break;
            case 'Config': newStr = 'Configuration Management'; break;
            case 'OpsWorks': newStr = 'Amazon Chef'; break;
            case 'Service Catalog': newStr = 'Amazon Setup Already'; break;
            case 'Identity & Access Management': newStr = 'Users, Keys, & Certs'; break;
            case 'Trusted Advisor': newStr = 'Cost Optimization'; break;
            case 'EMR': newStr = 'Amazon Hadooper'; break;
            case 'Data Pipeline': newStr = 'Amazon ETL'; break;
            case 'Kinesis': newStr = 'Amazon High Throughput'; break;
            case 'Machine Learning': newStr = 'aka Skynet'; break;
            case 'Cognito': newStr = 'OAuth As A Service'; break;
            case 'Device Farm': newStr = 'Test on Devices'; break;
            case 'SNS': newStr = 'Amazon Messenger'; break;
            case 'API Gateway': newStr = 'API Proxy'; break;
            case 'AppStream': newStr = 'Amazon Citrix'; break;
            case 'CloudSearch': newStr = 'Full Text Search'; break;
            case 'Elastic Transcoder': newStr = 'Beginning Cut Pro'; break;
            case 'SES': newStr = 'Queue'; break;
            case 'SWF': newStr = 'EC2 Queue'; break;
            case 'WorkSpaces': newStr = 'Remote Computer'; break;
            case 'WorkDocs': newStr = 'Unstructured Files'; break;
            case 'WorkMail': newStr = 'Company Email'; break;
            default: newStr = ''; break;

		}
		if (newStr != '')
			svcs[i].innerHTML = serviceName + ': ' + newStr;
  	}
}
