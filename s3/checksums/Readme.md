## Create a new s3 bucket

```
aws s3api create-bucket --bucket checksum-bl-1234 --create-bucket-configuration LocationConstraint=ca-central-1 
```

## Create a file that will we do a checksum on
```
echo "Hello Mars" > myfile.txt
```

## Get a checksum of a file for md5
```
md5sum myfile.txt
```
# 8ed2d86f12620cdba4c976ff6651637f  myfile.txt

## Upload our file and look at its etag
```
aws s3 cp myfile.txt s3://checksum-bl-1234/myfile.txt
aws s3api head-object --bucket checksum-bl-1234 --key myfile.txt
```

## Lets upload a file with a different kindof checksum
```
rhash --crc32 --simple myfile.txt
```
# e7c80b87  myfile.txt

```
aws s3api put-object \
--bucket="checksum-bl-1234" \
--key="myfile.txt" \
--body="myfile.txt" \
--checksum-algorithm="CRC32" \
--checksum-crc32="58gLhw=="
```