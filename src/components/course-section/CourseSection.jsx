import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './CourseSection.module.css';

function CourseSection({ ExpandAll, sectionDetails }) {
	const [open, toggleOpen] = useState(false);
	const {
		title,
		items,
		lecture_count: sectionLectures,
		content_length: sectionLength,
	} = sectionDetails;

	useEffect(() => {
		toggleOpen(ExpandAll);
	}, [ExpandAll]);

	const handleClick = () => {
		toggleOpen(!open);
	};

	return (
		<Accordion
			expanded={open}
			onClick={handleClick}
			className={styles.accordion}
		>
			<AccordionSummary
				className={styles.accordionSummary}
				expandIcon={<ExpandMore className={styles.expandIcon} />}
			>
				<span className={styles.summaryText}>{title}</span>
				{/* TODO: hide them in large screens */}
				<span>{sectionLectures}lectures . {Math.round(sectionLength / 60)}min</span>
			</AccordionSummary>
			<AccordionDetails className={styles.accordionDetails}>
				{items.map((item, idx) => {
					return (
						<p>
							<i className='fa-solid fa-circle-play'></i>
							<span
								className={
									item.can_be_previewed
										? styles.previewedLecture
										: styles.lectureTitle
								}
							>
								{item.title}
							</span>
						</p>
					);
				})}
			</AccordionDetails>
		</Accordion>
	);
}

export default CourseSection;
