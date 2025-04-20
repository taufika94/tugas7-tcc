import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import styled from 'styled-components';
import { BASE_URL } from "../utils";

const FormContainer = styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
`;

const EditNotes = () => {
    const[title,setJudul] = useState("");
    const[category,setCategory] = useState("");
    const[content,setContent] = useState("");
    const navigate = useNavigate();
    const{id} = useParams () ;

    useEffect (() => {
        getNotesById();
    }, []);

    const updateNotes = async (e) => {
        e.preventDefault () ;
        try{
            await axios.patch(`${BASE_URL}/notes/${id}`, {
                title,
                category,
                content,
            });
            navigate("/");
        } catch (error) {
            console.log(error);

        };
    };

    const getNotesById = async () => {
        const response = await axios.get(`${BASE_URL}/notes/${id}`);
        setJudul(response.data.judul);
        setCategory(response.data.category);
        setContent(response.data.content);
    };

    return (
        <FormContainer>
            <form onSubmit={updateNotes}>
                <div className="field">
                    <label className="label">Judul</label>
                    <div className="control">
                        <input type="text" className="input" value={title} onChange={(e) => setJudul(e.target.value)} placeholder='Judul' />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Kategory</label>
                    <div className="control">
                        <input type="text" className="input" value={category} onChange={(e) => setContent(e.target.value)} placeholder='Kategory' />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Content</label>
                    <div className="control">
                        <input type="text" className="input" value={content} onChange={(e) => setContent(e.target.value)} placeholder='Content' />
                    </div>
                </div>
                <div className="field">
                    <button type="submit" className="button is-success">Update</button>
                </div>
            </form>
        </FormContainer>
    );
};

export default EditNotes;