// import Select from '@/components/ElementWidgets/Elements/Inputs/Select';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { templateEditActions } from '@/app/store/slices/templateEditSlice';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import type { SelectOption } from '@/types/types';
// import { getTeams } from '@/requests';
import styles from './Sections.module.css';

const Org = () => {
  const [orgs, setOrgs] = useState<SelectOption[]>([]);
  const [chosenOrg, setChosenOrg] = useState('');
  const [departments, setDepartments] = useState<SelectOption[]>([]);
  const [chosenDep, setChosenDep] = useState('');
  // const { organizations } = useAppSelector((state) => state.government);
  const { companyId, departmentId } = useSelector((s: TypeRootState) => s.templateEdit);
  const dispatch = useDispatch<TypeDispatch>();

  // const getDeps = async () => {
  //   const deps = await getTeams(chosenOrg);
  //   const formattedDeps = deps.map((el: any) => ({
  //     label: el.title || '',
  //     value: el.team_id
  //   }));
  //   setDepartments(formattedDeps);
  // };

  // useEffect(() => {
  //   dispatch(addCompanyId({ companyId: chosenOrg }));
  //   getDeps();
  // }, [chosenOrg]);

  // useEffect(() => {
  //   if (!organizations?.length) return;
  //   const formattedOrgs = organizations.map((el) => ({
  //     label: el.additional_info?.title_abbreviation || el.title,
  //     value: el.organization_id
  //   }));
  //   setOrgs(formattedOrgs);
  // }, [organizations]);

  useEffect(() => {
    if (!chosenOrg) {
      return;
    }
    dispatch(templateEditActions.setDepartmentId(chosenDep));
    dispatch(templateEditActions.addCompanyId({ companyId: chosenDep }));
  }, [chosenDep]);

  useEffect(() => {
    if (!companyId || !orgs.length) return;

    const orgMatch = orgs.find((el) => el.value === companyId);

    orgMatch ? setChosenOrg(orgMatch.value) : {};
  }, [orgs]);

  useEffect(() => {
    if (!departmentId || !departments.length) {
      return;
    }

    const depMatch = departments.find((el) => el.value === departmentId);

    depMatch ? setChosenDep(depMatch.value) : {};
  }, [departments]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Выбор организации, для которой создаете опрос</h2>
      <p className={styles.description}>
        Вы можете запустить опрос на все организации вашего аккаунта – такая функция выбрана по умолчанию. Если нужно запустить опрос только в одной организации, выберите ее в списке и нажмите «Далее»
      </p>
      {/* <Select
        label="Организация"
        options={orgs}
        //@ts-ignore
        selected={chosenOrg}
        setSelected={setChosenOrg}
        specStyle={departments.length ? { marginBottom: '32px' } : {}}
      />
      {departments.length ? (
        <Select
          label="Подразделение"
          options={departments}
          //@ts-ignore
          selected={chosenDep}
          setSelected={setChosenDep}
        />
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Org;
