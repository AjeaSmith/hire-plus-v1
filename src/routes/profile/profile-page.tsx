import { useEffect } from 'react';
import { useParams } from 'react-router';
import {
	getProfileById,
	setEditView,
} from '../../app/features/profile/profileSlice';
import BeatLoader from 'react-spinners/BeatLoader';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Profile from '../../components/profile/profile.component';
import { Link } from 'react-router-dom';
import EditProfile from '../../components/profile/edit-profile.component';

const ProfilePage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { isLoading, profile, isEditting } = useAppSelector(
		(state) => state.profile
	);
	useEffect(() => {
		dispatch(getProfileById(id));
	}, [id, dispatch]);
	const settingEditView = () => {
		dispatch(setEditView(!isEditting));
	};
	return (
		<>
			{isLoading ? (
				<div className="text-center p-20">
					<BeatLoader color="#ffffff" />
				</div>
			) : (
				<>
					<section style={{ backgroundColor: '#252731' }}>
						<div className="px-12 py-5 text-right text-white">
							<button onClick={settingEditView}>Edit</button>
						</div>
						<div className="md:px-12 lg:px-24 max-w-7xl relative items-center w-full px-5 py-5 mx-auto">
							<div className="mx-auto flex flex-col w-full max-w-lg mb-12 text-center">
								<p className="mb-5 font-medium text-2xl text-white">
									{profile.displayName}
								</p>
								<img
									alt="testimonial"
									className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full"
									src="https://picsum.photos/200"
								/>
								<p className="mx-auto text-base leading-relaxed font-color">
									{profile.summary
										? profile.summary
										: 'Edit profile to add a Summary'}
								</p>
							</div>
						</div>
					</section>
					{isEditting ? <EditProfile /> : <Profile />}
				</>
			)}
		</>
	);
};

export default ProfilePage;
