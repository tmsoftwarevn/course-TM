import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data, FetchState } from '../../App';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner';
import CourseDetailsPage from '../../components/course-details-page/CourseDetailsPage';
import styles from './SingleCoursePage.module.css';

function SingleCoursePage() {
	
	const [fetched, setAsFetched] = useState(true);

	const { courseId } = useParams();
	const [courseDetails, setCourseDetails] = useState({});
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		//call api
	}, []);

	return fetched ? (
		notFound ? (
			<main className={styles.main}>
				<h1 className={styles.message}>Course Not Found</h1>
			</main>
		) : (
			<CourseDetailsPage courseDetails={courseDetails} />
		)
	) : (
		<LoadingSpinner />
	);
}


export default SingleCoursePage;
