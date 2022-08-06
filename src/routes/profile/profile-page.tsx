import { useEffect } from 'react';
import { useParams } from 'react-router';
import { getProfileById } from '../../app/features/profile/profileSlice';
import BeatLoader from 'react-spinners/BeatLoader';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Profile from '../../components/profile/profile.component';
import EditProfile from '../../components/profile/edit-profile.component';

const ProfilePage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { isLoading, isEditting } = useAppSelector((state) => state.profile);
	useEffect(() => {
		dispatch(getProfileById(id));
	}, [id, dispatch]);
	return (
		<>
			{isLoading ? (
				<div className="text-center p-20">
					<BeatLoader color="#ffffff" />
				</div>
			) : (
				<>{isEditting ? <EditProfile /> : <Profile />}</>
			)}
		</>
	);
};

export default ProfilePage;
