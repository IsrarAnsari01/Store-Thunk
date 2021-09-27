import { useEffect } from "react";
import { Spinner, Container, Row, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, deletePost } from "../store/middleWears/postMiddleWear";
import MaterialTable from "material-table";
export default function Posts() {
  let Posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const colums = [
    { title: "ID", field: "id" },
    { title: "Title", field: "title" },
    { title: "Body", field: "body" },
  ];

  const deletePostFromDb = (e, id) => {
    e.preventDefault();
    const sure = window.confirm(`Are you sure you want to delete this user ${id}`);
    if (sure) {
      dispatch(deletePost(id));
      if (Posts.deleted) {
        alert("Post Deleted Successfully");
        return;
      }
    }
  };
  return (
    <>
      {Posts.fetchPostLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : Posts.error ? (
        <Card>
          <Card.Header className="bg-danger text-light">
            {Posts.error}
          </Card.Header>
        </Card>
      ) : (
        Posts.posts &&
        Posts.posts.length && (
          <Container>
            <Row>
              <Col>
                <MaterialTable
                  title="List Of Open Courses"
                  columns={colums}
                  data={Posts.posts}
                  actions={[
                    {
                      icon: `add`,
                      tooltip: "Add New Post",
                      onClick: (event, rowData) =>
                        console.log(event, rowData.id),
                    },
                    {
                      icon: `edit`,
                      tooltip: "Update  Post",
                      onClick: (event, rowData) =>
                        console.log(event, rowData.id),
                    },
                    {
                      icon: `delete`,
                      tooltip: "Delete Post",
                      onClick: (event, rowData) =>
                        deletePostFromDb(event, rowData.id),
                    },
                  ]}
                  options={{
                    actionsColumnIndex: -1,
                  }}
                />
              </Col>
            </Row>
          </Container>
        )
      )}
    </>
  );
}
