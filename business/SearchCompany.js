function SearchCompanyInput({ onSelectedCompany, ...props }) {
  const Select = window.antd.Select;
  const Spin = window.antd.Spin;
  const Empty = window.antd.Empty;

  const [isFetching, setIsFetching] = React.useState(false);

  const [companies, setCompanies] = React.useState(null);
  const [typedText, setTypedText] = React.useState("");
  const [selectedCompany, setSelectedCompany] = React.useState(null);

  const fetchSuggestions = _.debounce(async (typedText) => {
    setIsFetching(true);
    try {
      const res = await fetch(
        `https://api.ritadata.com/search-company?event=visits&company=${typedText}`
      );

      const resJson = await res.json();

      const allCompanies = resJson["result"].map((company) => {
        return { label: company, value: company };
      });

      setCompanies(allCompanies);
    } catch (err) {
      console.log(err.message);
    }
    setIsFetching(false);
  }, 300); // 300ms debounce

  React.useEffect(() => {
    if (typedText.length) {
      fetchSuggestions(typedText);
    } else {
      setCompanies(null);
    }

    return () => fetchSuggestions.cancel();
  }, [typedText]);

  return (
    <Select
      {...props}
      suffixIcon={null}
      className={props.className ? props.className : "w-full"}
      placeholder={props.placeholder ? props.placeholder : "Search website"}
      placement={"bottomLeft"}
      showSearch
      popupMatchSelectWidth={false}
      loading={isFetching}
      value={selectedCompany}
      options={companies}
      onSearch={(value) => {
        setTypedText(value);
      }}
      onSelect={(newVal) => {
        onSelectedCompany(newVal);
        setSelectedCompany(newVal);

        setSelectedCompany(null);
        setCompanies(null);
      }}
      notFoundContent={
        isFetching ? (
          <Spin size="small" />
        ) : (
          <Empty
            image={
              !companies
                ? Empty.PRESENTED_IMAGE_DEFAULT
                : Empty.PRESENTED_IMAGE_SIMPLE
            }
            description={
              !companies
                ? "Start typing and we'll suggest matches..."
                : "Oops! No match. Try another name."
            }
          />
        )
      }
    />
  );
}
