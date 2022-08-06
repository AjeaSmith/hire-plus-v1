import { useEffect } from 'react';
import { useParams } from 'react-router';
import BeatLoader from 'react-spinners/BeatLoader';
import { getCompany } from '../../app/features/company/companySlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ViewCompany from '../../components/company/view-company.component';

const CompanyPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector((state) => state.company);

	useEffect(() => {
		dispatch(getCompany(id));
	}, [id, dispatch]);
	return <>{isLoading ? <BeatLoader /> : <ViewCompany />}</>;
};

export default CompanyPage;
