<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FormN;
use Illuminate\Support\Facades\Log;

class FormNController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        FormN::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'name' => 'required',
            'ccnumber' => 'required',
            'ccmonth' => 'required',
            'ccyear' => 'required',
            'cvv' => 'required'
            ]);
        if($request->hasFile('image')){
            $fileNameWithExt = $request->file('file-multiple-input')->getClientOriginalName();
            $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
            $extension = $request->file('file-multiple-input')->getClientOriginalExtension();
            $fileNameToStore= $filename.'_'.time().'.'.$extension;
            $path = $request->file('file-multiple-input')->storeAs('form_n', $fileNameToStore, 'view');
        }else{
            $fileNameToStore = 'noimage.jpg';
        }
        try{
            $formN = new FormN;
            $formN->nume = $request->input('name');
            $formN->numarcard = $request->input('ccnumber');
            $formN->luna = $request->input('ccmonth');
            $formN->anul = $request->input('ccyear');
            $formN->cvv = $request->input('cvv');
            $formN->imagine = $fileNameToStore;
            $formN->save();
        } catch (\Exception $e) {
            Log::error('SToRE FROM N:'.$e->getLine()." | ".$e->getFile()." | ".$e->getMessage());
            return response()->json(['404'=>'Error'],404);
        }
        return response()->json(['200' => 'Success', 'info' => 'success'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
