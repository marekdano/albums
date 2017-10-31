import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';

const AlbumDetail = (props) => {
	return (
		<Card>
			<Text>{props.album.title}</Text>
		</Card>
	);
};

AlbumDetail.propTypes = {
	album: PropTypes.shape({
		title: PropTypes.string,
		artist: PropTypes.string,
		url: PropTypes.string,
		image: PropTypes.string,
		thumbnail_image: PropTypes.string
	})
};

export default AlbumDetail;
