// Checking page title
if (document.title.indexOf("AWS Management Console") != -1) {
    //Creating Elements

    var svcs = document.getElementsByClassName("serviceName");
  	for (var i=0; i<svcs.length; i++){
  		var serviceName = svcs[i].innerHTML;
  		if (serviceName == "EC2"){
  			svcs[i].innerHTML = serviceName + ": Virtual Servers";
		}else if (serviceName == "EC2 Container Service"){
			svcs[i].innerHTML = serviceName + ": Docker As A Service";
		}else if (serviceName == "Elastic Beanstalk"){
			svcs[i].innerHTML = serviceName + ": Platform As A Service";
		}else if (serviceName == "Lambda"){
			svcs[i].innerHTML = serviceName + ": Response Scripts";
		}else if (serviceName == "S3"){
			svcs[i].innerHTML = serviceName + ": Unlimited FTP Server";
		}else if (serviceName == "CloudFront"){
			svcs[i].innerHTML = serviceName + ": Content Delivery Network";
		}else if (serviceName == "Elastic File System"){
			svcs[i].innerHTML = serviceName + ": EC2 File Management";
		}else if (serviceName == "Glacier"){
			svcs[i].innerHTML = serviceName + ": S3 Redundant Backups";
		}else if (serviceName == "Storage Gateway"){
			svcs[i].innerHTML = serviceName + ": S3 Network Integration";
		}else if (serviceName == "RDS"){
			svcs[i].innerHTML = serviceName + ": Amazon SQL";
		}else if (serviceName == "DynamoDB"){
			svcs[i].innerHTML = serviceName + ": Amazon NoSQL";
		}else if (serviceName == "ElastiCache"){
			svcs[i].innerHTML = serviceName + ": Memcached";
		}else if (serviceName == "Redshift"){
			svcs[i].innerHTML = serviceName + ": Data Warehouse";
		}else if (serviceName == "VPC"){
			svcs[i].innerHTML = serviceName + ": Virtual Colocated Rack";
		}else if (serviceName == "Route 53"){
			svcs[i].innerHTML = serviceName + ": DNS + Domains";
		}else if (serviceName == "CodeCommit"){
			svcs[i].innerHTML = serviceName + ": Amazon Github";
		}else if (serviceName == "CodePipeline"){
			svcs[i].innerHTML = serviceName + ": Continuous Integration";
		}else if (serviceName == "CloudWatch"){
			svcs[i].innerHTML = serviceName + ": Status Pager";
		}else if (serviceName == "CloudFormation"){
			svcs[i].innerHTML = serviceName + ": Services Setup";
		}else if (serviceName == "CloudTrail"){
			svcs[i].innerHTML = serviceName + ": Logging";
		}else if (serviceName == "Config"){
			svcs[i].innerHTML = serviceName + ": Configuration Management";
		}else if (serviceName == "OpsWorks"){
			svcs[i].innerHTML = serviceName + ": Amazon Chef";
		}else if (serviceName == "Service Catalog"){
			svcs[i].innerHTML = serviceName + ": Amazon Setup Already";
		}else if (serviceName == "Identity & Access Management"){
			svcs[i].innerHTML = serviceName + ": Users, Keys, & Certs";
		}else if (serviceName == "Trusted Advisor"){
			svcs[i].innerHTML = serviceName + ": Cost Optimization";
		}else if (serviceName == "EMR"){
			svcs[i].innerHTML = serviceName + ": Amazon Hadooper";
		}else if (serviceName == "Data Pipeline"){
			svcs[i].innerHTML = serviceName + ": Amazon ETL";
		}else if (serviceName == "Kinesis"){
			svcs[i].innerHTML = serviceName + ": Amazon High Throughput";
		}else if (serviceName == "Machine Learning"){
			svcs[i].innerHTML = serviceName + " aka Skynet";
		}else if (serviceName == "Cognito"){
			svcs[i].innerHTML = serviceName + ":OAuth As A Service";
		}else if (serviceName == "Device Farm"){
			svcs[i].innerHTML = serviceName + ": Test on Devices";
		}else if (serviceName == "SNS"){
			svcs[i].innerHTML = serviceName + ": Amazon Messenger";
		}else if (serviceName == "API Gateway"){
			svcs[i].innerHTML = serviceName + ": API Proxy";
		}else if (serviceName == "AppStream"){
			svcs[i].innerHTML = serviceName + ": Amazon Citrix";
		}else if (serviceName == "CloudSearch"){
			svcs[i].innerHTML = serviceName + ": Full Text Search";
		}else if (serviceName == "Elastic Transcoder"){
			svcs[i].innerHTML = serviceName + ": Beginning Cut Pro";
		}else if (serviceName == "SES"){
			svcs[i].innerHTML = serviceName + ": Transactional Email";
		}else if (serviceName == "SQS"){
			svcs[i].innerHTML = serviceName + ": Queue";
		}else if (serviceName == "SWF"){
			svcs[i].innerHTML = serviceName + ": EC2 Queue";
		}else if (serviceName == "WorkSpaces"){
			svcs[i].innerHTML = serviceName + ": Remote Computer";
		}else if (serviceName == "WorkDocs"){
			svcs[i].innerHTML = serviceName + ": Unstructured Files";
		}else if (serviceName == "WorkMail"){
			svcs[i].innerHTML = serviceName + ": Company Email";
		}
  	}
}