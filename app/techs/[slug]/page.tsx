import react from "react";

const TechPageSlug = async (props: { params: Promise<any> }) => {
  const params = await props.params;
  return (
    <div>
      {JSON.stringify(params)}
    </div>
  )
}

export default TechPageSlug;
