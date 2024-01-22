import React, { FC } from 'react';

interface ErrorPageProps {
	
}

const ErrorPage: FC<ErrorPageProps> = ({}) => {
	return (
		<div data-testid="not-found-page">
			Error
		</div>
	);
};

export default ErrorPage;
