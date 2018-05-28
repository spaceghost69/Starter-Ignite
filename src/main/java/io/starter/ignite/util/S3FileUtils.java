package io.starter.ignite.util;

import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.jets3t.service.S3Service;
import org.jets3t.service.S3ServiceException;
import org.jets3t.service.model.S3Bucket;
import org.jets3t.service.model.S3Object;

public class S3FileUtils {

	private S3Service s3Service;

	public S3FileUtils(S3Service s) {
		super();
		setS3Service(s);
	}

	public Iterator<File> iterateFiles(File folder, Object object, boolean b)
			throws S3ServiceException {
		List ret = new ArrayList();
		// List all your buckets.
		S3Bucket[] buckets = getS3Service().listAllBuckets();

		// List the object contents of each bucket.
		for (int b1 = 0; b1 < buckets.length; b1++) {
			System.out.println("Bucket '" + buckets[b1].getName()
					+ "' contains:");

			// List the objects in this bucket.
			S3Object[] objects = getS3Service().listObjects(buckets[b1]);

			// Print out each object's key and size.
			for (int o = 0; o < objects.length; o++) {
				ret.add(objects[o]);
			}
		}
		return ret.iterator();
	}

	public S3Service getS3Service() {
		return s3Service;
	}

	public void setS3Service(S3Service s3Service) {
		this.s3Service = s3Service;
	}

	public static void copyDir(String string, String reactExportFolder) {
		// TODO Auto-generated method stub

	}

}
