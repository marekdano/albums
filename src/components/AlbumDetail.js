import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const AlbumDetail = (props) => {
	return (
		<View>
			<Text>{props.album.title}</Text>
		</View>
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
