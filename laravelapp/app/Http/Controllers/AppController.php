<?php

namespace App\Http\Controllers;

use App\Models\app;
use Illuminate\Http\Request;

class AppController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(app::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        app::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'image' => $request->image,
        ]);
        return response()-> json(true);
    }

    /**
     * Display the specified resource.
     */
    public function show(app $app)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, app $app)
    {
        $app->name = $request->name;
        $app->email = $request->email;
        $app->password = $request->password;
        $app->image = $request->image;
        $app->save();
        return response()->json(true);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(app $app)
    {
        $app-> delete();
        return response()->json(true);
    }
}
