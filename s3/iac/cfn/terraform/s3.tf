resource "aws_s3_bucket" "my_s3_bucket" {
  bucket = "bb-my-tf-test-bucket-6574"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket" "my_s3_bucket_version2" {
  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}